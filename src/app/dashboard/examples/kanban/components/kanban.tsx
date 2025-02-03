"use client";

import { useState } from "react";
import { DndContext, DragEndEvent, closestCenter } from "@dnd-kit/core";
import {
  SortableContext,
  verticalListSortingStrategy,
  arrayMove,
} from "@dnd-kit/sortable";
import { User } from "./user";

export const Kanban = () => {
  const [people, setPeople] = useState([
    { name: "John", id: "abc" },
    { name: "Doe", id: "lmn" },
    { name: "Jane", id: "xyz" },
  ]);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    setPeople((people) => {
      const oldIndex = people.findIndex((person) => person.id === active.id);
      const newIndex = people.findIndex((person) => person.id === over?.id);

      const newOrder = arrayMove(people, oldIndex, newIndex);
      return newOrder;
    });
  };

  return (
    <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <h1 className="text-2xl font-bold">User List</h1>

      <SortableContext items={people} strategy={verticalListSortingStrategy}>
        {people.map((person) => (
          <User key={person.id} user={person} />
        ))}
      </SortableContext>
    </DndContext>
  );
};
