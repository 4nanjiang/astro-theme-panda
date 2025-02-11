---
title: 使用 AI 将钱迹账单导入到 Paisa 中
title_en: Importing Qianji Bills into Paisa Using AI
pubDate: 2025-02-11
tags: ['Ledger', 'AI', '财务', 'Paisa', '钱迹', '复式记账']
description: "本文探讨了如何使用 AI 将钱迹账单导入到 Paisa 中，详细介绍了步骤和注意事项。"
draft: false
---



### context

Paisa 为复式记账工具，在 GitHub 中开源。众多 APP 中选择 Paisa 的一大诱因，是其 Cash Flow 和 Assets Allocation 中直观且优美的图表。

复式记账虽然理念出众，却记录繁琐且不便。每日或定期整理累积的记录，有碍于养成好的记录习惯。碎片化的随时记录，更利于记录。目前有如 telegram bot 的快捷记录方式，不过还是比不过专业的 APP。

于是，我选择钱迹 APP 作为输入端，再将数据导入到 Paisa中。

### 用 chatgpt 编写导入模板

让 ChatGPT 阅读 Paisa 文档，给出对应补充。

1. prompt

  ```
  https://paisa.fyi/reference/import/
  这是个人财务记账软件paisa的模板导入教程，我需要书写一个代码模板，导入我在另一个记账软件钱迹中导出的数据，请问如何操作？
  ```
2. 输入钱迹导出 CSV 范本，
3. 提供钱迹与 Ledger 账本中资产、支出、收入等账户的一一映射关系。
4. 钱迹中日期格式到 Ledger 中的转换（Handlebars 代码）。
5. 删除多余行，符合 Ledger 规范。
6. 案例模板如下：

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

### 使用

之后便可以用钱迹记录日常收入与开支，定期导入至 Paisa 中。