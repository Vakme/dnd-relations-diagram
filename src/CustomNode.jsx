import React, { memo, useMemo, useCallback, useState, useRef } from "react";
import {
  Handle,
  Position,
  useReactFlow,
  getConnectedEdges,
} from "@xyflow/react";

export default memo(({ data }) => {
  return (
    <div style={{ position: "relative", zIndex: 999 }}>
      <div
        style={{
          fontSize: 24,
          background: "rgba(238,238,238, 0.5)",
          color: "#0c0c14",
          borderRadius: 16,
          textAlign: "center",
          border: "1px solid #777",
          padding: 8,
        }}
      >
        <Handle type="target" position={Position.Left} style={{ opacity: 0 }} />
        <Handle
          type="source"
          position={Position.Right}
          style={{ opacity: 0 }}
        />
        <div>
          <img
            style={{ width: 200 }}
            src={`./${data.label?.toLowerCase()}.webp`}
            alt={data.label}
            onError={(e) => (e.currentTarget.src = `./Default.png`)}
          />
        </div>
        {data.label}
      </div>
    </div>
  );
});
