import java.util.Scanner;
import java.util.Random;

public class NumerosAleatorios {
    public static void main(String[] args) {
        Random rand = new Random();

        int[] numAleatorio = new int[20];

        for (int i=0; i< numAleatorio.length; i++){
            int num = rand.nextInt(100);
            numAleatorio[i] = num;
        }

        System.out.println("Números Aleatórios");
        for (int vlr : numAleatorio) {
            System.out.print(vlr + " ");
        }
        System.out.println("\nNúmeros Sucessores");
        for (int vlr : numAleatorio) {
            System.out.print((vlr+1) + " ");
        }
    }
}
