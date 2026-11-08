import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import * as React from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { useAccess } from "@/lib/access-context";
import { getBloque } from "@/lib/content";

export const Route = createFileRoute("/bloque/$bloque")({
  component: BloquePage,
});

function BloquePage() {
  const { bloque } = Route.useParams();
  const { status } = useAccess();
  const navigate = useNavigate();
  const data = getBloque(bloque);

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
        <p className="mt-2 text-muted-foreground">Este bloque no existe.</p>
        <Link to="/" className="mt-6 inline-block font-medium text-primary">
          Volver al inicio
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-6xl px-6 py-12 md:py-16">
      <Link
        to="/"
        className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Inicio
      </Link>

      <div className="mt-8 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight md:text-5xl">{data.nombre}</h1>
        <p className="mt-4 font-serif text-xl text-muted-foreground">{data.titulo}</p>
        <p className="mt-4 text-base text-muted-foreground">{data.descripcion}</p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {data.herramientas.map((h, i) => (
          <Link
            key={h.slug}
            to={`/bloque/${data.slug}/${h.slug}`}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <div className="flex items-start justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border bg-white p-1.5 shadow-sm">
                <img src={h.logo} alt={h.nombre} className="h-full w-full object-contain" />
              </div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                {String(i + 1).padStart(2, "0")}
              </span>
            </div>
            <div className="mt-5">
              <h2 className="text-xl font-semibold tracking-tight">{h.nombre}</h2>
              <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary">
                {h.empresa}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{h.tagline}</p>
            </div>
            <div className="mt-5 flex items-center justify-between">
              <span className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground">
                {h.tipo}
              </span>
              <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
