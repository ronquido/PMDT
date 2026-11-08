import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import * as React from "react";
import { ArrowLeft, ArrowUpRight, Tag, LayoutTemplate } from "lucide-react";
import { useAccess } from "@/lib/access-context";
import { getHerramienta } from "@/lib/content";

export const Route = createFileRoute("/bloque/$bloque/$herramienta")({
  component: HerramientaPage,
});

function HerramientaPage() {
  const { bloque, herramienta } = Route.useParams();
  const { status } = useAccess();
  const navigate = useNavigate();
  const data = getHerramienta(bloque, herramienta);

  React.useEffect(() => {
    if (status === "denied") navigate({ to: "/" });
  }, [status, navigate]);

  if (status === "loading") {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24 text-center text-muted-foreground">
        Cargando…
      </div>
    );
  }

  if (!data) {
    return (
      <div className="mx-auto max-w-6xl px-6 py-24 text-center">
        <p className="text-6xl font-bold">404</p>
        <p className="mt-2 text-muted-foreground">Esta herramienta no existe.</p>
        <Link to="/" className="mt-6 inline-block font-medium text-primary">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-4xl px-6 py-12 md:py-16">
      <Link
        to={`/bloque/${bloque}`}
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        {bloque === "ideacion"
          ? "Ideación"
          : bloque === "conocimiento"
            ? "Conocimiento"
            : "Ejecución"}
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border bg-white p-2 shadow-sm">
            <img src={data.logo} alt={data.nombre} className="h-full w-full object-contain" />
          </div>
          <div className="min-w-0">
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
                {data.tipo}
              </span>
              <span className="text-xs font-medium text-muted-foreground">{data.empresa}</span>
            </div>
            <h1 className="mt-2 text-4xl font-bold tracking-tight md:text-5xl">{data.nombre}</h1>
          </div>
        </div>
        <p className="mt-4 font-serif text-xl text-muted-foreground">{data.tagline}</p>

        {data.enlace && (
          <a
            href={data.enlace}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Visitar sitio oficial
            <ArrowUpRight className="h-4 w-4" />
          </a>
        )}
      </header>

      <section className="mt-10 rounded-2xl border bg-card p-7">
        <p className="font-serif text-lg leading-relaxed text-foreground/90">{data.resumen}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {data.etiquetas.map((t) => (
            <span
              key={t}
              className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
            >
              <Tag className="h-3 w-3" />
              {t}
            </span>
          ))}
        </div>
      </section>

      <div className="mt-12 space-y-10">
        {data.secciones.map((seccion, i) => (
          <section key={seccion.titulo}>
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10 text-sm font-bold text-primary">
                {i + 1}
              </span>
              <h2 className="flex items-center gap-2 text-2xl font-semibold tracking-tight">
                <LayoutTemplate className="h-5 w-5 text-muted-foreground" />
                {seccion.titulo}
              </h2>
            </div>
            <div className="mt-4 space-y-3 border-l-2 border-border pl-6">
              {seccion.parrafos.map((p, j) => (
                <p key={j} className="leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </div>

      <div className="mt-14 border-t pt-8">
        <Link
          to={`/bloque/${bloque}`}
          className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" />
          Volver al bloque
        </Link>
      </div>
    </div>
  );
}
