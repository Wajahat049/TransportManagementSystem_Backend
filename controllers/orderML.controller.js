// import { createWorker } from 'tesseract.js';
// import * as tf from '@tensorflow/tfjs-node';

// const getModel = async () => {
//   const model = await tf.loadGraphModel('https://tfhub.dev/google/tfjs-model/imagenet/mobilenet_v2_100_224/classification/2/default/1', {
//     fromTFHub: true
//   });
//   return model;
// };

// const extractInformationFromPDF = async (filePath) => {
//   const worker = await createWorker({
//     logger: m => console.log(m)
//   });
//   // await worker.load();
//   await worker.loadLanguage('eng');
//   await worker.initialize('eng');

//   const { data: { text } } = await worker.recognize(filePath);
//   await worker.terminate();

//   const model = await getModel();

//   const orderRegex = /Order Number: (\w+)/;
//   const pickupRegex = /Pickup Date: (\d{2}\/\d{2}\/\d{4})/;
//   const deliveryRegex = /Delivery Date: (\d{2}\/\d{2}\/\d{4})/;

//   const orderMatch = text.match(orderRegex);
//   const pickupMatch = text.match(pickupRegex);
//   const deliveryMatch = text.match(deliveryRegex);

//   const orderNumber = orderMatch ? orderMatch[1] : null;
//   const pickupDate = pickupMatch ? pickupMatch[1] : null;
//   const deliveryDate = deliveryMatch ? deliveryMatch[1] : null;

//   const input = tf.tensor4d(Array.from({ length: 224 * 224 * 3 }).map(() => 0), [1, 2, 2, 1]);
//   const prediction = model.execute({ images: input, orderNumber, pickupDate, deliveryDate });
//   const result = prediction.arraySync();

//   return result;
// };

// // Example usage
// export const runTMSML=async()=>{

// const result = await extractInformationFromPDF('E:/TransportManagementSystem_Backend/files/PO#3_RATE CONFIRMATION-1.jpg');
// console.log("RES",result);
// }

// import pdfTextExtract from 'pdf-text-extract';
// import * as tf from '@tensorflow/tfjs-node';
// import fs from 'fs';

// // Load the PDF file
// const pdfFile = 'E:/TransportManagementSystem_Backend/files/PO3_RATE_CONFIRMATION.pdf';

// // Define the regular expressions to match the information you want to extract
// const orderNumberRegex = /Order Number: (\d+)/;
// const customerNameRegex = /Customer Name: (.+)/;
// const itemsRegex = /Items:\n([\s\S]+)\n\nTotal/;

// // Define a function to extract the information from the PDF text using regular expressions
// function extractInfo(text) {
//   const orderNumberMatch = text.match(orderNumberRegex);
//   const customerNameMatch = text.match(customerNameRegex);
//   const itemsMatch = text.match(itemsRegex);

//   const orderNumber = orderNumberMatch ? orderNumberMatch[1] : null;
//   const customerName = customerNameMatch ? customerNameMatch[1] : null;
//   const items = itemsMatch ? itemsMatch[1] : null;

//   return { orderNumber, customerName, items };
// }

// export const runTMSML=async()=>{

//   pdfTextExtract(pdfFile, (err, pages) => {
//     if (err) throw err;

//     // Extract the text from the PDF file
//     const text = pages.join(' ');
//     // Use the extractInfo function to extract the information
//     const { orderNumber, customerName, items } = extractInfo(text);

//     // Use TensorFlow.js to extract more specific information from the items text
//     // Here is an example of how to extract the names and quantities of each item
//     const itemsArray = items.split('\n').filter(line => line !== '');
//     const itemNames = itemsArray.map(line => line.split(' x ')[0]);
//     const itemQuantities = itemsArray.map(line => parseInt(line.split(' x ')[1]));

//     const itemNamesTensor = tf.tensor(itemNames);
//     const itemQuantitiesTensor = tf.tensor(itemQuantities);

//     itemNamesTensor.print();
//     itemQuantitiesTensor.print();
//   });
// }

import pdf from "pdf-extraction";
import fs from "fs";
import * as tf from "@tensorflow/tfjs-node";

// Define a function to extract the information from the PDF text using regular expressions
function extractInfo(text) {
  // Define the regular expressions to match the information you want to extract
  const orderNumberRegex = /Order Number: (\d+)/;
  const customerNameRegex = /Customer Name: (.+)/;
  const itemsRegex = /Items:\n([\s\S]+)\n\nTotal/;
  const carrierRegex = /Carrier:\s+(.+)\./;

  const orderNumberMatch = text.match(orderNumberRegex);
  const customerNameMatch = text.match(customerNameRegex);
  const itemsMatch = text.match(itemsRegex);
  const carrierMatch = text.match(carrierRegex);

  const orderNumber = orderNumberMatch ? orderNumberMatch[1] : null;
  const customerName = customerNameMatch ? customerNameMatch[1] : null;
  const items = itemsMatch ? itemsMatch[1] : null;
  const carrier = carrierMatch ? carrierMatch[1] : null;

  return { orderNumber, customerName, items, carrier };
}

export const runTMSML = async (req, res, next) => {
  async function getPDFText(source) {
    let dataBuffer = fs.readFileSync(source);

    pdf(dataBuffer)
      .then(function (data) {
        // number of pages
        // console.log(data.numpages);
        // // number of rendered pages
        // console.log(data.numrender);
        // // PDF info
        // console.log(data.info);
        // // PDF metadata
        // console.log(data.metadata);
        // // PDF.js version
        // // check https://mozilla.github.io/pdf.js/getting_started/
        // console.log(data.version);
        // PDF text
        var line = "";
        var lines = data.text.split("\n"); //multiLines contains your text
        for (var i = 0; i < lines.length; i++) {
          line += "," + lines[i].trim();
        }

        line = line.substring(1);
        // console.log("TEXT", line);
        const { orderNumber, customerName, items, carrier } = extractInfo(
          data.text
        );

        // res.status(200).send({
        //   data: {
        //     carrier: carrier,
        //   },
        //   // status: 200,
        // });
        // res.redirect("/");

        console.log("DATA", orderNumber, customerName, items, carrier);

        // Use TensorFlow.js to extract more specific information from the items text
        // Here is an example of how to extract the names and quantities of each item
        // const itemsArray = items.split('\n').filter(line => line !== '');
        // const itemNames = itemsArray.map(line => line.split(' x ')[0]);
        // const itemQuantities = itemsArray.map(line => parseInt(line.split(' x ')[1]));

        // const itemNamesTensor = tf.tensor(itemNames);
        // const itemQuantitiesTensor = tf.tensor(itemQuantities);

        // itemNamesTensor.print();
        // itemQuantitiesTensor.print();
      })
      .catch((err) => {
        console.log("ERROR", err);
      });
  }

  getPDFText(
    "E:/TransportManagementSystem_Backend/files/PO3_RATE_CONFIRMATION.pdf"
  );
};
