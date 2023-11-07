import data from "@/utils/data";
import { NextResponse } from "next/server";

function getRandomElementsFromArray(array, count) {
  const result = [];
  const arrayCopy = [...array]; // Create a copy of the original array

  while (result.length < count && arrayCopy.length > 0) {
    const randomIndex = Math.floor(Math.random() * arrayCopy.length);
    result.push(arrayCopy.splice(randomIndex, 1)[0]);
  }

  return result;
}

// Example usage with an array of 100 elements
export const GET = async (req, { params }) => {
  const originalArray = Array.from({ length: 100 }, (_, i) => i + 1); // Create an array of numbers from 1 to 100
  const randomElements = getRandomElementsFromArray(data, 10);


  return NextResponse.json({ success: true, data: randomElements });
};
