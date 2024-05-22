import Accordion from "./Accordion";

const items = [
  {
    headerContent: "Accordion Item #1",
    bodyContent: (
      <div>
        <strong>This is the first item&apos;s accordion body.</strong> It is
        shown by default, until the collapse plugin adds the appropriate classes
        that we use to style each element. These classes control the overall
        appearance, as well as the showing and hiding via CSS transitions. You
        can modify any of this with custom CSS or overriding our default
        variables. It&apos;s also worth noting that just about any HTML can go
        within the <code>.accordion-body</code>, though the transition does
        limit overflow.
      </div>
    ),
  },
  {
    headerContent: "Accordion Item #2",
    bodyContent: (
      <div>
        <strong>This is the second item&apos;s accordion body.</strong> It is
        hidden by default, until the collapse plugin adds the appropriate
        classes that we use to style each element. These classes control the
        overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding
        our default variables. It&apos;s also worth noting that just about any
        HTML can go within the <code>.accordion-body</code>, though the
        transition does limit overflow.
      </div>
    ),
  },
  {
    headerContent: "Accordion Item #3",
    bodyContent: (
      <div>
        <strong>This is the third item&apos;s accordion body.</strong> It is
        hidden by default, until the collapse plugin adds the appropriate
        classes that we use to style each element. These classes control the
        overall appearance, as well as the showing and hiding via CSS
        transitions. You can modify any of this with custom CSS or overriding
        our default variables. It&apos;s also worth noting that just about any
        HTML can go within the <code>.accordion-body</code>, though the
        transition does limit overflow.
      </div>
    ),
  },
];

export default function AccordionDemo() {
  return <Accordion accordionId="accordionExample" items={items} />;
}
