import clsx from "clsx";

function Location({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        "text-sm not-italic",
        invert ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      <strong className={invert ? "text-white" : "text-neutral-950"}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  );
}

const Locations = ({ invert = false, ...props }) => {
  return (
    <ul role="list" {...props}>
      <li>
        <Location name="United States" invert={invert}>
          13925 Bora Dr.
          <br />
          La Mirada, CA 90638
        </Location>
      </li>
      <li>
        <Location name="United States" invert={invert}>
          13925 Bora Dr.
          <br />
          La Mirada, CA 90638
        </Location>
      </li>
    </ul>
  );
};

export default Locations;
