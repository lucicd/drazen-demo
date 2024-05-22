function AccordionItemHeader({ headerContent, parentItemId, hidden }) {
  const dataBsTarget = `#${parentItemId}`;
  const ariaExpanded = hidden ? "false" : "true";
  return (
    <h2 className="accordion-header">
      <button
        className="accordion-button collapsed"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target={dataBsTarget}
        aria-expanded={ariaExpanded}
        aria-controls={parentItemId}
      >
        {headerContent}
      </button>
    </h2>
  );
}

function AccordionItemBody({ bodyContent, parentId, itemId, hidden }) {
  const className = `accordion-collapse collapse ${hidden ? "" : "show"}`;
  const dataBsParent = `#${parentId}`;
  return (
    <div id={itemId} className={className} data-bs-parent={dataBsParent}>
      <div className="accordion-body">{bodyContent}</div>
    </div>
  );
}

export default function AccordionItem({
  accordionId,
  headerContent,
  bodyContent,
  itemId,
  hidden,
}) {
  return (
    <div className="accordion-item">
      <AccordionItemHeader
        headerContent={headerContent}
        parentItemId={itemId}
        hidden={hidden}
      />
      <AccordionItemBody
        bodyContent={bodyContent}
        parentId={accordionId}
        hidden={hidden}
        itemId={itemId}
      />
    </div>
  );
}
