package dio.programacaoorientadaaobjeto;

public class App {
    public static void main(String[] args){

        //UpCast
        Funcionario funcionario = new Funcionario();

        Funcionario Gerente = new Gerente();
        Funcionario Faxineiro = new Faxineiro();
        Funcionario Vendedor = new Vendedor();

        //DownCast
        Vendedor vend = (Vendedor) new Funcionario();
    }
}
