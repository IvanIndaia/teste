public class Usuario {
    public static void main(String[] args) throws Exception {

        SmartTV smartTV = new SmartTV();
        
        smartTV.ligar();
        smartTV.mudarCanal(12);

        System.out.println("TV ligadas: " + smartTV.ligada);
        System.out.println("No canal: " + smartTV.canal);
        System.out.println("Com volume: " + smartTV.volume);

    }
}
