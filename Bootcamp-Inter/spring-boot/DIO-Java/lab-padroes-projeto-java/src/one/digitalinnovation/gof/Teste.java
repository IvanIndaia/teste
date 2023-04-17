package one.digitalinnovation.gof;

import one.digitalinnovation.gof.facade.Facade;
import one.digitalinnovation.gof.singleton.*;
import one.digitalinnovation.gof.strategy.*;

public class Teste {
	
	public static void main(String[] args) {

		// Singleton ===========================================
		
		SingletonLazy lazy = SingletonLazy.getInstancia();
		System.out.println(lazy);
		lazy = SingletonLazy.getInstancia();
		System.out.println(lazy);
		System.out.println("==========================");
		
		SingletonEager eager = SingletonEager.getInstancia();
		System.out.println(eager);
		eager = SingletonEager.getInstancia();
		System.out.println(eager);
		System.out.println("==========================");
		
		SingletonLazyHolder lazyHolder = SingletonLazyHolder.getInstancia();
		System.out.println(lazyHolder);
		lazyHolder = SingletonLazyHolder.getInstancia();
		System.out.println(lazyHolder);
		System.out.println("==========================");
		
		//Strategy ===========================================
		
		Comportamento defensivo = new ComportamentoDefensivo();
		Comportamento normal = new ComportamentoNormal();
		Comportamento agressivo = new ComportamentoAgressivo();
		
		Robo robo = new Robo();
		
		robo.setComportamento(normal);
		robo.mover();
		robo.mover();
		System.out.println("---------------------------");
		
		robo.setComportamento(defensivo);
		robo.mover();
		System.out.println("---------------------------");
		
		robo.setComportamento(agressivo);
		robo.mover();
		robo.mover();
		robo.mover();
		System.out.println("---------------------------");
		
		
		// Facade ===========================================
		
		Facade facade = new Facade();
		facade.migrarCliente("Ivan Alex", "13323420");
		
		
	}

}