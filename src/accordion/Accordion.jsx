import AccordionItem from "./AccordionItem";

export default function Accordion({ accordionId, items }) {
  function renderItems() {
    return items.map((item, index) => {
      const itemId = `item-${index}`;
      return (
        <AccordionItem
          accordionId={accordionId}
          headerContent={item.headerContent}
          bodyContent={item.bodyContent}
          itemId={itemId}
          key={itemId}
          hidden={index !== 0}
        />
      );
    });
  }

  return (
    <div className="accordion" id={accordionId}>
      {renderItems()}
    </div>
  );
}
