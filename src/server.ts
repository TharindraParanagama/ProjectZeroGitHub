import { app } from "./main";

//Allocating a port to run the server
const PORT: number = 3000;

//a port designated for the server and a callback function
// with an output to the console to know the server is up
//and running
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
