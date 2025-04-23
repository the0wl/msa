# My Custom Form

## fields

Expressão os campos inclusos no formulário.

**Propriedades herdadas do TSX**

- `type`, `label`, `name`, `placeholder`
  
**Propriedades customizadas**

- `isRequired` o campo é obrigatório para a submissão do formulário
- `validation` validação necessária para o campo (regex).
- `onChange` método executado ao atualizar o valor de um campo
- `onFocus` método executado ao campo receber foco
- `onBlur` método executado ao campo perder foco

## Exemplo

```json
  "fields": [
    {
      "type": "text",
      "label": "Usuário",
      "name": "username",
      "placeholder": "Digite seu usuário",
      "isRequired": true,
      "validation": "^[a-zA-Z][a-zA-Z0-9_.-]{2,19}$",
      "onChange": "handleUsernameChange",
      "onFocus": "handleUsernameFocus",
      "onBlur": "handleUsernameBlur"
    },
    {
      "type": "password",
      "label": "Senha",
      "name": "password",
      "placeholder": "Digite sua senha",
      "isRequired": true,
      "validation": "^(?=.*[A-Za-z])(?=.*\\d)(?=.*[!@#$%^&*])[A-Za-z\\d!@#$%^&*]{8,}$"
    }
  ]
```