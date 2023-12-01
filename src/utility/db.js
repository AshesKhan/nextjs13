const { name, password } = process.env;
export const connectionSrt =
  "mongodb+srv://" +
  name +
  ":" +
  password +
  "@cluster0.6agowrz.mongodb.net/ashproductDB?retryWrites=true&w=majority";
