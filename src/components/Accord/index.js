import React from "react";
import { Collapse, Divider } from "antd";

const { Panel } = Collapse;

const text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;

export default function Accord() {
  return (
    <>
      <Collapse>
        <Panel header="This is default size panel header" key="1">
          <p>{text}</p>
        </Panel>
      </Collapse>
    </>
  );
}
