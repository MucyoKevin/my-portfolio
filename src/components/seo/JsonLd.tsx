/**
 * Emits a JSON-LD block for the page.
 *
 * `</script>` inside a string would close the tag early and break the document,
 * so the one character that can do that is escaped. React cannot help here —
 * the payload has to go in raw for crawlers to parse it.
 */
export function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
