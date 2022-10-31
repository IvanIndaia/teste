import 'package:flutter/material.dart';
import './perguntas.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int respostaCorretas = 0;
  bool finalizou = false;


  void verificar() {
    for (var p in listaDePerguntas){
      if (){
        respostaCorretas++;
      }
    }
    setState(() {
      finalizou = true;
    });
  }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(widget.title),
        ),
        body: SingleChildScrollView(
          child: Column(
            children: [
              Card(
                child: Column(
                  children: [
                    ...listaDePerguntas
                        .map((p) => Card(
                              margin: const EdgeInsets.only(bottom: 8),
                              child: Padding (padding: ,)
                              child: Text(p.textoDaPergunta),
                            ))
                        .toList()
                    // Text(listaDePerguntas[0].textoDaPergunta),
                    // Text(listaDePerguntas[0].textoDaPergunta),
                  ],
                ),
              )

              // SizedBox(
              //   height: 400,
              //   child: Container(color: Colors.red),
              // ),
              // SizedBox(
              //   height: 400,
              //   child:Container(color: Colors.green),
              // ),
            ],
          ),
        ));
  }
}
