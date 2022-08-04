export const Loadersvg = (props) => {
  return (
    <svg version="1.1" id="L2" width={100}>
      <circle
        fill="none"
        stroke="red"
        strokeWidth="4"
        strokeMiterlimit="10"
        cx="50"
        cy="50"
        r="48"
      />
      <line
        fill="none"
        strokeLinecap="round"
        stroke="red"
        strokeWidth="4"
        strokeMiterlimit="10"
        x1="50"
        y1="50"
        x2="85"
        y2="50.5"
      >
        <animateTransform
          attributeName="transform"
          dur="2s"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </line>
      <line
        fill="none"
        strokeLinecap="round"
        stroke="red"
        strokeWidth="4"
        strokeMiterlimit="10"
        x1="50"
        y1="50"
        x2="49.5"
        y2="74"
      >
        <animateTransform
          attributeName="transform"
          dur="15s"
          type="rotate"
          from="0 50 50"
          to="360 50 50"
          repeatCount="indefinite"
        />
      </line>
    </svg>
  );
};

export const Vote_average = (strokeDasharray) => {
  return (
    <svg viewBox="0 0 36 36" className="circular-chart green">
      <path
        className="circle-bg"
        d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
      />
      <path
        className="circle"
        strokeDasharray={`${strokeDasharray.strokeDasharray}`}
        d="M18 2.0845
a 15.9155 15.9155 0 0 1 0 31.831
a 15.9155 15.9155 0 0 1 0 -31.831"
      />
    </svg>
  );
};
