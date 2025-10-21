import {
  getBezierPath,
  useInternalNode,
  EdgeLabelRenderer,
  Position,
} from "@xyflow/react";

import { getEdgeParams } from "./utils";

const isHorizontal = (pos) => {
  return pos === Position.Left || pos === Position.Right;
};

function FloatingEdge({
  id,
  source,
  target,
  markerEnd,
  style,
  data,
  selected,
}) {
  const sourceNode = useInternalNode(source);
  const targetNode = useInternalNode(target);

  if (!sourceNode || !targetNode) {
    return null;
  }

  const { sx, sy, tx, ty, sourcePos, targetPos } = getEdgeParams(
    sourceNode,
    targetNode
  );

  const [edgePath, labelX, labelY] = getBezierPath({
    sourceX: data.hasSibling && !isHorizontal(sourcePos) ? sx + 8 : sx,
    sourceY: data.hasSibling && isHorizontal(sourcePos) ? sy + 8 : sy,
    sourcePosition: sourcePos,
    targetPosition: targetPos,
    targetX: data.hasSibling && !isHorizontal(targetPos) ? tx + 8 : tx,
    targetY: data.hasSibling && isHorizontal(targetPos) ? ty + 8 : ty,
  });

  return (
    <>
      <path
        id={id}
        className="react-flow__edge-path"
        d={edgePath}
        markerEnd={markerEnd}
        style={style}
      />

      <EdgeLabelRenderer>
        {selected && (
          <div
            data-testId={id}
            style={{
              position: "fixed",
              transform: `translate(${labelX}px,${labelY}px)`,
              color: "white",
            }}
            className="edge-label-renderer__custom-edge nodrag nopan"
          >
            {data.label}
          </div>
        )}
      </EdgeLabelRenderer>
    </>
  );
}

export default FloatingEdge;
