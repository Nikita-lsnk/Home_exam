import React, {useState} from 'react'
import styled from "styled-components"
import HomeModal from './HomeModal'


const Home = () => {

  // поиск 
  // function findElement(array, target) {
  //   for (let i = 0; i < array.length; i++) {
  //     if (array[i] === target) {
  //       return i;
  //     }
  //   }
  //   return false;
  // }

  // const myArrayOne = [1, 2, 3, 4, 5];
  // const targetElement = 1;

  // const index = findElement(myArrayOne, targetElement);

  // if (index !== false) {
  //   console.log(`Элемент ${targetElement} найден в массиве на позиции ${index}.`);
  // } else {
  //   console.log(`Элемент ${targetElement} не найден в массиве.`);
  // }


  // сортировка 
  // function Sort(array) {
  //   const arrLength = array.length;

  //   for (let i = 0; i < arrLength - 1; i++) {
  //     for (let j = 0; j < arrLength - i - 1; j++) {
  //       if (array[j] > array[j + 1]) {
  //         // Обмен элементов
          
  //         const temp = array[j];
  //         array[j] = array[j + 1];
  //         array[j + 1] = temp;
  //       }
  //     }
  //   }

  //   return array;
  // }

  // const myArrayTwo = [64, 34, 25, 12, 22, 11, 90];
  // const sortedArray = Sort(myArrayTwo);
  

  // console.log("Отсортированный массив:", sortedArray);


  // реверс
//   function reverseArray(array) {
//     const reversed = [];
//     for (let i = array.length - 1; i >= 0; i--) {
//         reversed.push(array[i]);
//     }
//     return reversed;
// }

// const originalArray = [1, 2, 3, 4, 5];

// console.log("Реверсированный массив:", reverseArray(originalArray));


// копирование

// function customSlice(array, start = 0, end = array.length) {
//   const copiedArray = [];
//   for (let i = start; i < end && i < array.length; i++) {
//       copiedArray.push(array[i]);
//   }
//   return copiedArray;
// }

// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = customSlice(originalArray, 0, 5);

// console.log("Исходный массив:", originalArray);
// console.log("Скопированный массив:", copiedArray);

//мемоизация 

// const memo = (fn) => {
//   const cache = {};
//   return (n) => {
//     if (n in cache) {
//       return cache[n];
//     }
//     return cache[n] = fn(n)
//   }
// }

// const factorial = memo((x) => {
//   console.log("Calculator for x=" + x);

//   return (!x || x === 1) ? 1 : x*factorial(x-1);

// });

// console.log(factorial(3))
// console.log(factorial(3))


//рекурсивный обход обьекта
// function hasValue(obj, targetValue) {
//   for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//           const value = obj[key];

//           if (value === targetValue) {
//               return true;
//           }

//           if (typeof value === "object" && value !== null) {
//               if (hasValue(value, targetValue)) {
//                   return true;
//               }
//           }
//       }
//   }
//   return false;
// }

// const testObject = {
//   a: 1,
//   b: {
//       c: 2,
//       d: {
//           e: 3
//       }
//   }
// };

// console.log(hasValue(testObject, 3)); 
// console.log(hasValue(testObject, 4)); 

  const [openModal, setOpenModal] = useState(false)

  return (
    <Container>
      <MainBlock>
        <MainButton onClick={() => setOpenModal(!openModal)}>Открыть окно</MainButton>
      </MainBlock>
      {openModal && (
        <HomeModal
          openModal = {openModal}
          setOpenModal = {setOpenModal}
        />
      )}
    </Container>
  )
}

export default Home

const Container = styled.div`
  /* position: absolute; */
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 100vh;
  background-color: #f5f5f5;
`;

const MainBlock = styled.div`
  margin: 0 auto;
  width: calc(100% - 600px);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  background-color: #ffffff;
  border-radius: 20px;
`;

const MainButton = styled.button`
  border: 1px solid #b5b5b5;
  background: transparent;
  padding: 10px 20px;
  border-radius: 10px;
`;