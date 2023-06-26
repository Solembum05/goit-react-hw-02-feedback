import Feedback  from './Feedback/Feedback.jsx'

const initialState = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App = () => {
  return (
    <div>
      <Feedback initialState={initialState}    />
    </div>
  );
};
