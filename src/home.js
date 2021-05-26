import FetchAPI from "./fetchAPI";
import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

export default class Home extends FetchAPI {
  render() {
    const TextStyle = {
      color: "#" + this.state.color,
      fontSize: 100,
    };

    return (
      <>
        <div style={TextStyle}>Colored Text</div>
        <button className="get-button" onClick={this.handleClick}>
          {this.state.value}
        </button>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label className="input-style">
              Add text to button:
              <input
                className="input-style"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
              />
            </label>
          </form>
        </div>
        <div>
          <DragDropContext
            onDragEnd={(param) => {
              const sourceIndex = param.source.index;
              const destinationIndex = param.destination.index;
              this.state.colorList.splice(
                destinationIndex,
                0,
                this.state.colorList.splice(sourceIndex, 1)[0]
              );
            }}
          >
            <Droppable droppableId="droppableid-1">
              {(provided) => (
                <ul
                  className="wholelist-style"
                  {...provided.droppableProps}
                  ref={provided.innerRef}
                >
                  {this.state.colorList.map((color, i) => {
                    return (
                      <Draggable key={color} draggableId={color} index={i}>
                        {(provided, snapshot) => (
                          <li
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className="list-style"
                            style={{
                              color: "#" + color,
                              fontWeight:
                                color === this.state.color ? "bold" : "normal",

                              ...provided.draggableProps.style,
                              boxShadow: snapshot.isDragging
                                ? "0 0 .4rem #666"
                                : "none",
                            }}
                          >
                            {"#" + color}
                          </li>
                        )}
                      </Draggable>
                    );
                  })}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        </div>
      </>
    );
  }
}
