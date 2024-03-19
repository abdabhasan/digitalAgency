type Props = {};

const Statstics = (props: Props) => {
  return (
    <div className="stats">
      <div className="stat place-items-center">
        <div className="stat-title">Years of experience</div>
        <div className="stat-value">13+</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Clients</div>
        <div className="stat-value text-sky-400">200+</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Services</div>
        <div className="stat-value">1,200+</div>
      </div>
    </div>
  );
};

export default Statstics;
