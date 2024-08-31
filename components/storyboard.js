import Statement from "@/components/statement";
import Empty from "@/components/empty";
import { Story } from "@/utils/story";
import { useContext, useEffect, useState } from "react";
import getStoryboards from "@/helpers/getStoryboards";
import Action from "./action";
import { sort } from "@/utils/sort";

export default function StoryBoard() {
  const { state, dispatch } = useContext(Story);

  const [entities, setEntities] = useState([]);
  const [statAndActions, setStatAndActions] = useState([]);

  useEffect(() => {
    const storyboards = async () => {
      let res = await getStoryboards();
      let data = { ...res.data.story };
      console.log(data);
      dispatch({
        type: "ADD_PLACETIME",
        payload: data.placetimes[0],
      });
    };

    storyboards();
  }, []);

  useEffect(() => {
    let entitiesProps = [];
    let all = [];

    state.placetimes.entities.forEach((entity) => {
      entity.statements = [];
      entity.actions = [];
      entitiesProps.push(entity);
    });

    state.placetimes.statements.forEach((statement) => {
      statement.action = false;
      all.push(statement);

      entitiesProps.forEach((entity) => {
        if (entity.gid == statement.by) {
          entity.statements.push(statement);
        }
      });
    });

    state.placetimes.actions.forEach((action) => {
      action.action = true;
      all.push(action);

      entitiesProps.forEach((entity) => {
        if (entity.gid == action.by) {
          entity.actions.push(action);
        }
      });
    });

    setEntities([...entitiesProps]);
    sort(all);
    setStatAndActions([...all]);
  }, [state]);

  return (
    <div className="flex-col p-6 justify-center w-[85vw] h-fit bg-slate-950 rounded-lg text-slate-500 text-lg">
      <>
        {entities.map((entity) => (
          <>
            <div className="flex flex-col space-y-10 h-1/3">
              <span>{entity.name}</span>
              <div className="w-full h-[0.5rem] bg-slate-800 rounded"></div>
              <div className="flex gap-6">
                {console.log(statAndActions)}
                {statAndActions.map((obj) =>
                  obj.by.gid == entity.gid ? (
                    obj.action ? (
                      <Action description={obj.description} />
                    ) : (
                      <Statement description={obj.description} />
                    )
                  ) : (
                    <Empty />
                  )
                )}
              </div>
            </div>
          </>
        ))}
      </>
    </div>
  );
}
