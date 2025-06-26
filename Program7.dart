import 'package:flutter/material.dart';

void main() {
 runApp(MyApp());
}

//Made MyApp a StatefulWidget to manage counter state
class MyApp extends StatefulWidget {
 @override
 _MyAppState createState() => _MyAppState();
}

class _MyAppState extends State<MyApp> {
 int counter = 0;

 void _incrementCounter() {
   setState(() {
     counter++;
   });
 }

 @override
 Widget build(BuildContext context) {
   return MaterialApp(
     title: "This is a Counter Program",
     home: Scaffold(
       appBar: AppBar(
         title: Text("Program 7: Counter Program",
             style: TextStyle(
                 color: Colors.blue,
                 backgroundColor:
                 Colors.greenAccent)
         ),
       ),
       body: Align(
         child: Column(
           children: [
             Text("Counter:",
             style: TextStyle(
               fontSize: 20,
               color: Colors.blue[900],
             )),
             Container(
               padding: EdgeInsets.all(16.0),
               margin: EdgeInsets.all(15.0),
               color: Colors.yellow[400],
               child: Text(counter.toString(), style: TextStyle(fontSize: 28)),
               alignment: Alignment.center,
               width: 200.0,
               height: 100.0,
             ),
             ElevatedButton(
               onPressed: _incrementCounter,
               child: Text("Increment the value"),
             ),
           ],
         ),
       ),
       backgroundColor: Colors.blue[100],
       floatingActionButton: FloatingActionButton(
         onPressed: () {},
         child: Icon(Icons.add),
         backgroundColor: Colors.orange[600],
       ),
     ),
   );
 }
}