import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useAccess } from "@/lib/access-context";
import { AccessGate } from "@/components/AccessGate";
import { BLOQUES } from "@/lib/content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "PMDT · Herramientas digitales de Gestión de Proyectos" },
      {
        name: "description",
        content:
          "Explora herramientas digitales para la dirección de proyectos: ideación, conocimiento y ejecución.",
      },
    ],
  }),
  component: Index,
});

function formatDate(iso: string): string {
  try {
    return new Date(`${iso}T00:00:00`).toLocaleDateString("es-ES", {
      day: "numeric",
      month: "long",
      year: "numeric",
    });
  } catch {
    return iso;
  }
}

function Index() {
  const { status, expiresOn, logout } = useAccess();

  if (status === "loading") {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-muted-foreground">
        Cargando…
      </div>
    );
  }

  if (status !== "granted") {
    return <AccessGate />;
  }

  return (
    <div className="mx-auto max-w-6xl px-6">
      <section className="py-16 text-center md:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
          Project Management Digital Tools
        </p>
        <h1 className="mx-auto mt-4 max-w-3xl text-5xl font-bold tracking-tight md:text-6xl">
          La caja de herramientas digitales del responsable de proyectos
        </h1>
        <p className="mx-auto mt-5 max-w-2xl font-serif text-lg text-muted-foreground">
          Un recorrido por aplicaciones que acompañan al gestor de proyectos en cada fase: generar
          buenas ideas, transformarlas en conocimiento y convertirlas en resultados.
        </p>
      </section>

      <section className="pb-8 grid gap-6 md:grid-cols-3">
        {BLOQUES.map((bloque, i) => (
          <Link
            key={bloque.slug}
            to={`/bloque/${bloque.slug}`}
            className="group relative flex flex-col overflow-hidden rounded-2xl border bg-card p-7 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            <span className="absolute right-6 top-6 text-6xl font-extrabold text-muted-foreground/10 transition-colors group-hover:text-foreground/10">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="flex items-center gap-2.5">
              <img
                src={bloque.herramientas[0]?.logo}
                alt={bloque.herramientas[0]?.nombre}
                className="h-8 w-8 rounded-lg border bg-white object-contain p-1"
              />
              <span className="text-xs font-medium text-muted-foreground">
                {bloque.herramientas.length} herramientas
              </span>
            </div>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight">{bloque.nombre}</h2>
            <p className="mt-2 flex-1 text-sm text-muted-foreground">{bloque.descripcion}</p>
            <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary">
              Explorar
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        ))}
      </section>

      <section className="py-12">
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border bg-card p-6">
          <p className="text-sm text-muted-foreground">
            {expiresOn ? (
              <>
                Tu acceso es válido hasta el{" "}
                <span className="font-semibold text-foreground">{formatDate(expiresOn)}</span>.
              </>
            ) : (
              "Sesión iniciada."
            )}
          </p>
          <button
            onClick={logout}
            className="text-sm font-medium text-muted-foreground hover:text-foreground"
          >
            Cerrar sesión
          </button>
        </div>
      </section>
    </div>
  );
}
