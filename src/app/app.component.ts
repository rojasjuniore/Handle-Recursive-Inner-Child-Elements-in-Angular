import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
      <span style="display: block">{{ title }} app is running!</span>
      <img width="300" alt="Angular Logo" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==">
    </div>
    <hr />
    <h3> Option 1</h3>
    <ng-container  *ngTemplateOutlet="replyThread; context: { $implicit: replies }"></ng-container>
    <ng-template #replyThread let-childReplies>
      <ul>
        <li *ngFor="let reply of childReplies">
          <b>{{ reply.id }}:</b> {{ reply.value }}
          <ng-container *ngIf="reply.children">
            <ng-container  *ngTemplateOutlet="replyThread;   context: { $implicit: reply.children }"></ng-container>
          </ng-container>
        </li>
      </ul>
    </ng-template>

  <hr />
  br
  <h3> Option 1</h3>
  <app-reply [replies]="replies"></app-reply>
  `,
  styles: []
})
export class AppComponent {

  replies = [
    {
      id: 1,
      value: 'Lorem',
      children: [
        {
          id: 1.1,
          value: 'consectetur',
          children: [
            {
              id: '1.1.1',
              value: 'adipiscing '
            }
          ]
        }
      ]
    },
    {
      id: 2,
      value: 'Ipsum'
    },
    {
      id: 3,
      value: 'Dolor',
      children: [
        {
          id: 3.1,
          value: 'eiusmod'
        },
        {
          id: 3.2,
          value: 'labore',
          children: [
            {
              id: '3.2.1',
              value: 'aliqua'
            }
          ]
        }
      ]
    },
    {
      id: 4,
      value: 'Sit'
    }
  ]


  title = 'recursive-child';
}
