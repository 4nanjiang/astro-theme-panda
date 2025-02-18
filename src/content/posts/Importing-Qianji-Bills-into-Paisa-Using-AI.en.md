---
title: "Importing Qianji Bills into Paisa Using AI"
pubDate: 2025-02-11
tags: ['Ledger', 'AI', 'Finance', 'Paisa', 'Qianji', 'Double-Entry Bookkeeping']
description: "This article explores how to use AI to import bills from Qianji into Paisa, detailing the steps and considerations involved."
draft: false
---

### Context

Paisa is an open-source double-entry bookkeeping tool available on GitHub. Among many apps, one of the main attractions of Paisa is its intuitive and beautiful charts in Cash Flow and Assets Allocation sections.

While double-entry bookkeeping has excellent principles, the recording process is complex and inconvenient. Daily or periodic organization of accumulated records can hinder the development of good recording habits. Fragmented, real-time recording is more conducive to maintaining records. While there are quick recording methods like telegram bots, they still can't compare to specialized apps.

Therefore, I chose the Qianji APP as the input end and then import the data into Paisa.

### Using ChatGPT to Write Import Templates

I had ChatGPT read the Paisa documentation and provide corresponding supplements.

1. Initial prompt:

  ```
  https://paisa.fyi/reference/import/ 
  This is the template import tutorial for the personal finance software Paisa. I need to write a code template to import data exported from another accounting software called Qianji. How should I proceed?
  ```
2. Input the Qianji CSV export template
3. Provide one-to-one mapping relationships between Qianji and Ledger accounts for assets, expenses, income, etc.
4. Convert date formats from Qianji to Ledger (Handlebars code)
5. Remove redundant lines to comply with Ledger specifications
6. Example template as follows:

  ```
  {{#if (isDate ROW.B "YYYY-MM-DD HH:mm:ss")}}
    {{date ROW.B "YYYY-MM-DD HH:mm:ss" "YYYY/MM/DD"}} {{ROW.J}} {{ROW.C}} {{#if ROW.D}}- {{ROW.D}}{{/if}}
    {{!-- 处理收入 --}}
    {{#if (eq ROW.E "收入")}}
      {{#if (eq ROW.C "工资")}}
        Income:Active:Salary    -{{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.C "奖金")}}
        Income:Active:Bonus    -{{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.C "投资")}}
        Income:Passive:Investment    -{{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.C "收红包")}}
        Income:other:RedPacket    -{{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.C "外快")}}
        Income:Active:Others    -{{ROW.F}} {{ROW.G}}
      {{else}}
        Income:other:other    -{{ROW.F}} {{ROW.G}}
      {{/if}}
      {{!-- 账户对应 --}}
      {{#if (eq ROW.H "CCB")}}
        Assets:LiquidAssets:Checking:CCB    {{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.H "WeChat")}}
        Assets:LiquidAssets:EWallet:EwaWeChat    {{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.H "Alipay")}}
        Assets:LiquidAssets:EWallet:Alipay    {{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.H "Cash")}}
        Assets:LiquidAssets:Cash    {{ROW.F}} {{ROW.G}}
      {{else}}
        Assets:{{ROW.H}}    {{ROW.F}} {{ROW.G}}
      {{/if}}
    {{/if}}
    {{!-- 处理支出 --}}
    {{#if (eq ROW.E "支出")}}
      {{#if (eq ROW.C "房租")}}
        Expenses:Housing:Rent    {{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.C "话费")}}
        Expenses:Housing:Phone    {{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.C "水电燃气")}}
        Expenses:Housing:Utilities    {{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.C "买菜")}}
        Expenses:Food:Groceries    {{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.C "堂食")}}
        Expenses:Food:DiningOut    {{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.C "外卖")}}
        Expenses:Food:delivery    {{ROW.F}} {{ROW.G}}
      {{else}}
        Expenses:Shopping:other    {{ROW.F}} {{ROW.G}}
      {{/if}}
      {{!-- 账户对应 --}}
      {{#if (eq ROW.H "CCB")}}
        Assets:LiquidAssets:Checking:CCB   -{{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.H "WeChat")}}
        Assets:LiquidAssets:EWallet:EwaWeChat   -{{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.H "Alipay")}}
        Assets:LiquidAssets:EWallet:Alipay   -{{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.H "Cash")}}
        Assets:LiquidAssets:Cash   -{{ROW.F}} {{ROW.G}}
      {{else}}
        Assets:{{ROW.H}}   -{{ROW.F}} {{ROW.G}}
      {{/if}}
    {{/if}}
    {{!-- 处理转账 --}}
    {{#if (eq ROW.E "转账")}}
      {{#if (eq ROW.H "CCB")}}
        Assets:LiquidAssets:Checking:CCB    -{{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.H "WeChat")}}
        Assets:LiquidAssets:EWallet:EwaWeChat    -{{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.H "Alipay")}}
        Assets:LiquidAssets:EWallet:Alipay    -{{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.H "Cash")}}
        Assets:LiquidAssets:Cash    -{{ROW.F}} {{ROW.G}}
      {{else}}
        Assets:{{ROW.H}}    -{{ROW.F}} {{ROW.G}}
      {{/if}}
      {{#if (eq ROW.I "CCB")}}
        Assets:LiquidAssets:Checking:CCB   {{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.I "WeChat")}}
        Assets:LiquidAssets:EWallet:EwaWeChat   {{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.I "Alipay")}}
        Assets:LiquidAssets:EWallet:Alipay   {{ROW.F}} {{ROW.G}}
      {{else if (eq ROW.I "Cash")}}
        Assets:LiquidAssets:Cash   {{ROW.F}} {{ROW.G}}
      {{else}}
        Assets:{{ROW.I}}   {{ROW.F}} {{ROW.G}}
      {{/if}}
    {{/if}}
  {{/if}}
  ```

### Usage

After setting this up, you can use Qianji to record daily income and expenses, then periodically import them into Paisa.