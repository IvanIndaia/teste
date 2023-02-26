package Study.src.Study;

import java.util.Scanner;

public class Consoantes {
    public static void main(String[] args) {
        Scanner teclado = new Scanner(System.in) ;

        String[] conso = new String[6];
        int quantidadeConso = 0;
        int count = 0;

        do{

            System.out.println("Digite uma letra: ");
            String letra = teclado.next();
            if (!(letra.equalsIgnoreCase("a") ||
                letra.equalsIgnoreCase("e") ||
                letra.equalsIgnoreCase("i") ||
                letra.equalsIgnoreCase("o") ||
                letra.equalsIgnoreCase("u"))){
                    conso[count] = letra;
                    quantidadeConso++;
            }
           count++;

        }while (count < conso.length);

        for (String c : conso ) {
            if (c != null) {
                System.out.print(c + " ");
            }
        }


    }
}
