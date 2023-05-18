import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  private isUserLoggedIn = false;

  login(username: string, password: string): boolean {
    // Lógica para autenticar al usuario y verificar las credenciales
    // Si las credenciales son válidas, establece isUserLoggedIn en true
    // y devuelve true. De lo contrario, devuelve false.
    if (username === 'usuario' && password === 'contraseña') {
      this.isUserLoggedIn = true;
      return true;
    } else {
      this.isUserLoggedIn = false;
      return false;
    }
  }

  logout(): void {
    // Lógica para cerrar sesión
    // Restablecer cualquier estado relacionado con la sesión del usuario
    this.isUserLoggedIn = false;
  }

  isLoggedIn(): boolean {
    // Devuelve el estado actual de isUserLoggedIn
    return this.isUserLoggedIn;
  }
}
