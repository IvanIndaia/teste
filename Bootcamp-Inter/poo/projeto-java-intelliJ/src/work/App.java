package work;

public class App {
    public static void main(String[] args){
        Carror carro1 = new Carror();

        carro1.setCor("Azul");
        carro1.setModelo("Prisma");
        carro1.setCapacidadeTanque(60);

        System.out.println(carro1.getCor());
        System.out.println(carro1.getModelo());
        System.out.println(carro1.getCapacidadeTanque());
        System.out.println("R$ "+carro1.totalValorTanque(4.5));

        System.out.println();
        carro1.setCor("Prata");
        carro1.setModelo("Mercedes");
        carro1.setCapacidadeTanque(69);

        System.out.println(carro1.getCor());
        System.out.println(carro1.getModelo());
        System.out.println(carro1.getCapacidadeTanque());
        System.out.println("R$ "+carro1.totalValorTanque(6.5));

    }
}
