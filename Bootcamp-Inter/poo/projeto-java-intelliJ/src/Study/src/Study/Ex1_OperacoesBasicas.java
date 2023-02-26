package Study.src.Study;

import java.util.Scanner;

public class Ex1_OperacoesBasicas {
    public static void main(String[] args) {

        Scanner teclado = new Scanner(System.in);
        int operador;

        do {
            System.out.println("Digite 1 para Multiplicar. \nDigite 2 para Dividir. \nDigite 3 para Somar. \nDigite 4 para Subtrair. ");
            operador = teclado.nextInt();
            System.out.println("Operador = " + operador);
        } while (operador != 5 || operador != 3);

        switch (operador) {
            case 1:
                System.out.println("Multiplicar");
                break;
            case 2:
                System.out.println("Dividir");
                break;
            case 3:
                System.out.println("Somar");
                break;
            case 4:
                System.out.println("Subtrair");
                break;
            default:
                System.out.println("Valor incorreto.");
        }
    }
}
