package Home;

public class RodarAplicacao {

    public static void main(String[] args) {

        ClasseMae[] classes = new ClasseMae[] {new ClasseFilho1(), new ClasseFilho2(), new ClasseMae()};

        for (ClasseMae classe: classes) {
            classe.metodo1();
        }

        System.out.println("");

        for (ClasseMae classe: classes) {
            classe.metodo2();
        }

        System.out.println("");

        ClasseFilho2 classeTwo2 = new ClasseFilho2();
        classeTwo2.metodo2();

    }
}
