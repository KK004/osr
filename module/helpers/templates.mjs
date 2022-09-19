/**
 * Define a set of template paths to pre-load
 * Pre-loaded templates are compiled and cached for fast access when rendering
 * @return {Promise}
 */

export async function preloadHandlebarsTemplates() {
  const partials = [
        // Actor partials.
        "systems/osr/templates/actor/parts/actor-features.hbs",
        "systems/osr/templates/actor/parts/actor-items.hbs",
        "systems/osr/templates/actor/parts/actor-spells.hbs",
        "systems/osr/templates/actor/parts/actor-effects.hbs",
  ];

  const paths = {};
  for ( const path of partials ) {
    paths[path.replace(".hbs", ".html")] = path;
    paths[`osr.${path.split("/").pop().replace(".hbs", "")}`] = path;
  }

  return loadTemplates(paths);
}
