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
      if (p.indiceAlternativaSelecionada == p.indiceAlternativaCorreta){
        respostasCorretas++;
      }
    }
    setState(() {
      finalizou = true;
    });
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
              ...listaDePerguntas
                .map((p) => Card(
                  margin: const EdgeInsets.only(bottom: 8),
                  child: Padding (
                    padding: const EdgeInsets.fromLTRB(15, 5, 15, 5),
                    child: Column(
                      crossAxisAlignment: CrossAxisAlignment.start,
                      children: [
                        Text(p.textoDaPergunta),
                        const SizeBox (height: 8),
                        RadioListTile(
                          title: Text(p.alternativas[0]),
                          value: 0,
                          groupValue: p.indiceAlternativaSelecionada,
                          onChanged: (int? value) {
                            setState(() {
                              p.indiceAlternativaSelecionada = value!;
                            });
                          },
                        ),
                        
                        RadioListTile(
                          title: Text(p.alternativas[1]),
                          value: 1,
                          groupValue: p.indiceAlternativaSelecionada,
                          onChanged: (int? value) {
                            setState(() {
                              p.indiceAlternativaSelecionada = value!;
                            });
                          },
                        ),

                        RadioListTile(
                          title: Text(p.alternativas[2]),
                          value: 2,
                          groupValue: p.indiceAlternativaSelecionada,
                          onChanged: (int? value) {
                            setState(() {
                              p.indiceAlternativaSelecionada = value!;
                            });
                          },
                        ),

                        RadioListTile(
                          title: Text(p.alternativas[3]),
                          value: 3,
                          groupValue: p.indiceAlternativaSelecionada,
                          onChanged: (int? value) {
                            setState(() {
                              p.indiceAlternativaSelecionada = value!;
                            });
                          },
                        ),
                      ],
                    ),
                  ),
                ))
            .toList(),
            !finalizou 
              ? ElevatedButton(
                onPressed: verificar, 
                child: const Text("Verificar"),
              ) 
              : Text("Você acertou $respostasCorretas perguntas")
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
