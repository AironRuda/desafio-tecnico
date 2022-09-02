# Desarrollo de desafio tecnico

En la siguiente aplicación se emularon las vistas del diseño provisto.
Se debe decidir entre crear cuenta o iniciar sesión.

## Etapas del registro:
### Primera etapa
El campo para ingresar el teléfono no funciona, únicamente funciona el botón para navegar a la siguiente etapa.
### Segunda etapa
 Los campos funcionan, se debe ingresar un correo, un número de teléfono y dos contraseñas que coincidan (La contraseña no requiere de caracteres especiales, ni requiere de números, ni de letras mayúsculas, ni obliga a tener letras minúsculas). Es posible también iniciar sesión con identity providers como facebook o google, un correo de confirmación con un código será enviado y el usuario será registrado en el user pool con el correo como usuario y el mismo correo como contraseña. Debido a que la autenticación por código no está habilitada el usuario nuevo quedará registrado, pero no será autenticado y por lo tanto no podrá acceder a la aplicación.
### Tercera etapa
 Se confirma que la información anterior era correcta e indica que la cuenta fue creada.
### Cuarta etapa
 se muestran espacios para un código de verificación de 4 dígitos que no está habilitado, el botón de confirmar navega hasta el home.

## Etapas de inicio de sesión: 
	Se requiere un usuario y una contraseña. Debido a que los códigos de autenticación no funcionan el tratar de ingresar un nuevo usuario no permite el ingreso. Los usuarios que pueden ser utilizados fueron autenticados manualmente y se pueden implementar para observar el correcto desempeño de la aplicación.
### Usuario 1: 
			usuario: aironn.rudaa@gmail.com
			contraseña: aironn.rudaa@gmail.com
### Usuario 2:
			usuario: airon.ruda@hotmail.com
			contraseña: airon.ruda@hotmail.com
