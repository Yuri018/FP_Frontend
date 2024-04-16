// Определяем начальное состояние для пользователя
export interface UserState {
  authenticated: boolean; 
  name: string; 
  authorities: { authority: string }[]; 
}