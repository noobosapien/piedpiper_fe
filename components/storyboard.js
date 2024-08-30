import Statement from "@/components/statement";
import Empty from "@/components/empty";
import { Story } from "@/utils/story";
import { useContext, useEffect, useState } from "react";
import getStoryboards from "@/helpers/getStoryboards";

export default function StoryBoard() {
  const { state, dispatch } = useContext(Story);

  const [entities, setEntities] = useState([]);

  useEffect(() => {
    const storyboards = async () => {
      let res = await getStoryboards();
      dispatch({
        type: "ADD_PLACETIME",
        payload: { ...res.data.story.placetimes[0] },
      });
      console.log(res.data.story.placetimes[0]);
    };

    storyboards();
  }, []);

  useEffect(() => {
    console.log(state);
    let entitiesProps = [];

    state.placetimes.entities.forEach((entity) => {
      entity.statements = [];
      entity.actions = [];
      entitiesProps.push(entity);
    });

    state.placetimes.statements.forEach((statement) => {
      entitiesProps.forEach((entity) => {
        if (entity.gid == statement.by) {
          entity.statements.push(statement);
        }
      });
    });

    state.placetimes.actions.forEach((action) => {
      entitiesProps.forEach((entity) => {
        if (entity.gid == action.by) {
          entity.actions.push(action);
        }
      });
    });

    setEntities([...entitiesProps]);
  }, [state]);

  return (
    <div className="flex-col p-6 justify-center w-[85vw] h-[96vh] bg-slate-950 rounded-lg text-slate-500 text-lg">
      <>
        {entities.map((entity) => (
          <>
            <div className="flex flex-col space-y-10 h-1/3">
              <span>{entity.name}</span>
              <div className="w-full h-[0.5rem] bg-slate-800 rounded"></div>
              <div className="flex gap-6">
                {entity.statements.map((statement) => (
                  <>
                    <Statement />
                  </>
                ))}
                {entity.actions.map((action) => (
                  <>
                    <Statement />
                  </>
                ))}
              </div>
            </div>
          </>
        ))}
      </>
    </div>
  );
}
