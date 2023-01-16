import PropagateLoader from "react-spinners/PropagateLoader";

type SpinnerProps = {
  isLoading: boolean;
  color: string
}

const override: React.CSSProperties = {
  display: "block",
  margin: "0 auto",
  borderColor: "#53FFAA",
};

export default function Spinner({ isLoading, color }: SpinnerProps) {
  return (
    <div className="sweet-loading">
      <PropagateLoader
        color={color}
        loading={isLoading}
        cssOverride={override}
        size={15}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}