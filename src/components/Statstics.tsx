type Props = {};

const Statstics: React.FC = (props: Props): JSX.Element => {
  return (
    <div className="stats bg-sky-50 ">
      <div className="stat place-items-center">
        <div className="stat-title text-sky-500">Years of experience</div>
        <div className="stat-value">13+</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title">Islands</div>
        <div className="stat-value text-sky-400">200+</div>
      </div>

      <div className="stat place-items-center">
        <div className="stat-title text-sky-500">Articals</div>
        <div className="stat-value">1,200+</div>
      </div>
    </div>
  );
};

export default Statstics;
