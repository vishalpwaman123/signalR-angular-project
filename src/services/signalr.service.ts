import { Injectable } from '@angular/core';
import { HubConnection, HubConnectionBuilder } from '@microsoft/signalr';

@Injectable({
  providedIn: 'root',
})
export class SignalrService {
  private readonly hubConnection: HubConnection;
  constructor() {
    this.hubConnection = new HubConnectionBuilder()
      .withUrl('https://localhost:7192/shoppingListHub')
      .build();
  }
  getHubConnection(): HubConnection {
    return this.hubConnection;
  }

  async connect(): Promise<void> {
    try {
      await this.hubConnection.start();
      console.log('SignalR connected');
    } catch (error) {
      console.error('SignalR connection error : ', error);
    }
  }

  async createShoppingList(): Promise<void> {
    try {
      await this.hubConnection.invoke('CreateShoppingList');
    } catch (error) {
      console.error('Error invoking CreateShoppingList : ', error);
    }
  }

  async addItem(shoppingListId: string, item: string): Promise<void> {
    try {
      await this.hubConnection.invoke('AddItem', shoppingListId, item);
    } catch (error) {
      console.error('Error invoking Additem : ', error);
    }
  }

  async removeItem(shoppingListId: string, item: string): Promise<void> {
    try {
      await this.hubConnection.invoke('RemoveItem', shoppingListId, item);
    } catch (error) {
      console.error('Error invoking RemoveItem : ', error);
    }
  }

  async JoinShoppingList(shoppingListIdInput: string): Promise<void> {
    try {
      await this.hubConnection.invoke('JoinShoppingList', shoppingListIdInput);
    } catch (error) {
      console.error('Error Invoking joinShoppingList : ', error);
    }
  }
}
