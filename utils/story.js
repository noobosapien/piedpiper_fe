import { createContext, useReducer } from "react";

export const Story = createContext();

const initialState = {
  placetimes: {
    time: {
      date: "",
      vague: true,
    },
    place: {
      name: "",
      vague: true,
    },
    entities: [
      {
        gid: 0,
        name: "First entity",
        main: true,
        multiple: false,
      },
    ],
    statements: [
      {
        order: 0,
        description: "",
        thought: true,
        vague: false,
        by: 0,
        perspective: 0,
        about: 0,
      },
    ],
    actions: [
      {
        order: 1,
        description: "",
        to: 1,
        by: 0,
        perspective: 1,
      },
    ],
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_PLACETIME": {
      return { ...state, placetimes: { ...action.payload } };
    }

    default:
      return state;
  }
}

export function StoryProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };

  return <Story.Provider value={value}>{props.children}</Story.Provider>;
}
