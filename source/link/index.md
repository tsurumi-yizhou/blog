---
title: 友链
type: link
date: 2022-10-07 14:18:12
---
{% raw %}
<div class="post-body">
   <div id="links">
      <style>
         .links-content{
         margin-top:1rem;
         }
         .link-navigation::after {
         content: " ";
         display: block;
         clear: both;
         }
         .card {
         width: 45%;
         font-size: 1rem;
         padding: 10px 20px;
         border-radius: 4px;
         transition-duration: 0.15s;
         margin-bottom: 1rem;
         display:flex;
         }
         .card:nth-child(odd) {
         float: left;
         }
         .card:nth-child(even) {
         float: right;
         }
         .card:hover {
         transform: scale(1.1);
         box-shadow: 0 2px 6px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
         }
         .card a {
         border:none;
         }
         .card .ava {
         width: 3rem!important;
         height: 3rem!important;
         margin:0!important;
         margin-right: 1em!important;
         border-radius:4px;
         }
         .card .card-header {
         font-style: italic;
         overflow: hidden;
         width: 100%;
         }
         .card .card-header a {
         font-style: normal;
         color: #2bbc8a;
         font-weight: bold;
         text-decoration: none;
         }
         .card .card-header a:hover {
         color: #d480aa;
         text-decoration: none;
         }
         .card .card-header .info {
         font-style:normal;
         color:#a3a3a3;
         font-size:14px;
         min-width: 0;
         overflow: hidden;
         white-space: nowrap;
         }
      </style>
      <div class="links-content">
         <div class="link-navigation">
            <div class="card">
               <img class="ava" src="https://www.fawdlstty.com/img/logo.jpg" />
               <div class="card-header">
                  <div>
                     <a href="https://www.fawdlstty.com/">Fawdlstty个人小站</a>
                  </div>
               </div>
            </div>
            <div class="card">
               <img class="ava" src="https://www.marxists.org/chinese/images/1-marx.jpg" />
               <div class="card-header">
                  <div>
                     <a href="https://www.marxists.org/chinese/index.html">中文马克思主义文库</a>
                  </div>
               </div>
            </div>
            <div class="card">
               <img class="ava" src="https://liyin.date/myfiles/images/logo.png" />
               <div class="card-header">
                  <div>
                     <a href="https://liyin.date">天空·边界</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</div>
{% endraw %}