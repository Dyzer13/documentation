(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{144:function(t,e,s){"use strict";s.r(e);var a=s(0),r=Object(a.a)({},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"content"},[t._m(0),t._v(" "),s("p",[t._v("This guide covers the installation of the requirements for a panel with SSL enabled.")]),t._v(" "),s("p"),t._m(1),s("p"),t._v(" "),t._m(2),t._v(" "),s("p",[t._v("The panel requirements can be found "),s("router-link",{attrs:{to:"/panel/getting_started.html#dependencies"}},[t._v("here")])],1),t._v(" "),t._m(3),t._v(" "),t._m(4),t._m(5),t._v(" "),t._m(6),t._m(7),t._v(" "),t._m(8),t._m(9),t._v(" "),t._m(10),t._m(11),t._v(" "),t._m(12),t._v(" "),t._m(13),t._m(14),t._v(" "),t._m(15),t._m(16),t._v(" "),s("p",[t._v("This following section covers the configuration of parts of the server to run the panel.")]),t._v(" "),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19),s("p",[t._v("The following are safe defaults.")]),t._v(" "),t._m(20),t._v(" "),t._m(21),t._v(" "),t._m(22),t._v(" "),t._m(23),t._v(" "),t._m(24),t._v(" "),t._m(25),t._v(" "),t._m(26),t._v(" "),s("p",[t._v("We have a tutorial in the tutorial section"),s("br"),t._v(" "),s("router-link",{attrs:{to:"/tutorials/mysql_setup.html"}},[t._v("Setting up MySQL")])],1),t._v(" "),t._m(27),t._v(" "),s("p",[t._v("The default php-fpm configuration is good to use.")]),t._v(" "),s("p",[t._v("Start and enable php-fpm on the system.")]),t._v(" "),t._m(28),t._m(29),t._v(" "),s("p",[t._v("follow the "),s("router-link",{attrs:{to:"/tutorials/creating_ssl_certificates.html"}},[t._v("tutorial")]),t._v(" on generating an SSL cert to use.")],1),t._v(" "),t._m(30),t._v(" "),t._m(31),t._m(32),t._v(" "),s("p",[t._v("The default Redis install is perfectly fine for the panel.")]),t._v(" "),s("p",[t._v("If you have Redis already in use you may want to look into running another Redis instance similar to "),s("a",{attrs:{href:"https://community.pivotal.io/s/article/How-to-setup-and-run-multiple-Redis-server-instances-on-a-Linux-host",target:"_blank",rel:"noopener noreferrer"}},[t._v("this guide"),s("OutboundLink")],1)]),t._v(" "),t._m(33),t._v(" "),s("p",[t._v("Follow the regular guide to install the "),s("router-link",{attrs:{to:"/panel/getting_started.html#installation"}},[t._v("panel")])],1)])},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"install-pterodactyl-on-debian-9"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-pterodactyl-on-debian-9","aria-hidden":"true"}},[this._v("#")]),this._v(" Install pterodactyl on Debian 9")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#install-requirements"}},[t._v("Install Requirements")]),s("ul",[s("li",[s("a",{attrs:{href:"#mariadb"}},[t._v("MariaDB")])]),s("li",[s("a",{attrs:{href:"#php-7-2"}},[t._v("PHP 7.2")])]),s("li",[s("a",{attrs:{href:"#nginx"}},[t._v("nginx")])]),s("li",[s("a",{attrs:{href:"#redis"}},[t._v("Redis")])]),s("li",[s("a",{attrs:{href:"#utilities"}},[t._v("utilities")])])])]),s("li",[s("a",{attrs:{href:"#server-configuriation"}},[t._v("Server Configuriation")]),s("ul",[s("li",[s("a",{attrs:{href:"#mariadb"}},[t._v("MariaDB")])]),s("li",[s("a",{attrs:{href:"#php"}},[t._v("PHP")])]),s("li",[s("a",{attrs:{href:"#nginx"}},[t._v("nginx")])]),s("li",[s("a",{attrs:{href:"#redis"}},[t._v("Redis")])])])]),s("li",[s("a",{attrs:{href:"#installing-the-panel"}},[t._v("Installing the panel")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"install-requirements"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-requirements","aria-hidden":"true"}},[this._v("#")]),this._v(" Install Requirements")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"mariadb"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mariadb","aria-hidden":"true"}},[this._v("#")]),this._v(" MariaDB")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("apt "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" -y software-properties-common dirmngr\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("## get MariaDB gpg keys")]),t._v("\napt-key adv --recv-keys --keyserver hkp://keyserver.ubuntu.com:80 0xF1656F24C74CD1D8\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("## install the MariaDB repo")]),t._v("\nadd-apt-repository "),s("span",{attrs:{class:"token string"}},[t._v("'deb [arch=amd64,i386,ppc64el] http://mirror.jaleco.com/mariadb/repo/10.1/debian stretch main'")]),t._v("\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("## Get apt updates")]),t._v("\napt update\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("## Install MariaDB 10.1")]),t._v("\napt "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" -y mariadb-common mariadb-server mariadb-client\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("## Start maraidb")]),t._v("\nsystemctl start mariadb\nsystemctl "),s("span",{attrs:{class:"token function"}},[t._v("enable")]),t._v(" mariadb\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"php-7-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php-7-2","aria-hidden":"true"}},[this._v("#")]),this._v(" PHP 7.2")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token comment"}},[t._v("## Install the PHP 7.2 repo for debian")]),t._v("\napt "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" -y ca-certificates apt-transport-https\n"),s("span",{attrs:{class:"token function"}},[t._v("wget")]),t._v(" -q https://packages.sury.org/php/apt.gpg -O- "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" apt-key add -\n"),s("span",{attrs:{class:"token keyword"}},[t._v("echo")]),t._v(" "),s("span",{attrs:{class:"token string"}},[t._v('"deb https://packages.sury.org/php/ stretch main"')]),t._v(" "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),s("span",{attrs:{class:"token function"}},[t._v("tee")]),t._v(" /etc/apt/sources.list.d/php.list\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("## Get apt updates")]),t._v("\napt update\n\n"),s("span",{attrs:{class:"token comment"}},[t._v("## Install PHP 7.2")]),t._v("\napt "),s("span",{attrs:{class:"token function"}},[t._v("install")]),t._v(" -y php7.2 php7.2-cli php7.2-gd php7.2-mysql php7.2-pdo php7.2-mbstring php7.2-tokenizer php7.2-bcmath php7.2-xml php7.2-fpm php7.2-curl php7.2-zip\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"nginx"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("apt "),e("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" -y nginx\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"redis"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis","aria-hidden":"true"}},[this._v("#")]),this._v(" Redis")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("apt "),e("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" -y redis-server\n\nsystemctl start redis-server\nsystemctl "),e("span",{attrs:{class:"token function"}},[this._v("enable")]),this._v(" redis-server\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"utilities"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#utilities","aria-hidden":"true"}},[this._v("#")]),this._v(" utilities")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"certbot"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#certbot","aria-hidden":"true"}},[this._v("#")]),this._v(" certbot")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("apt "),e("span",{attrs:{class:"token function"}},[this._v("install")]),this._v(" -y certbot "),e("span",{attrs:{class:"token function"}},[this._v("curl")]),this._v("\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"composer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#composer","aria-hidden":"true"}},[this._v("#")]),this._v(" composer")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{attrs:{class:"token function"}},[t._v("curl")]),t._v(" -sS https://getcomposer.org/installer "),s("span",{attrs:{class:"token operator"}},[t._v("|")]),t._v(" php -- --install-dir"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("/usr/local/bin --filename"),s("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v("composer\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"server-configuriation"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#server-configuriation","aria-hidden":"true"}},[this._v("#")]),this._v(" Server Configuriation")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"mariadb-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mariadb-2","aria-hidden":"true"}},[this._v("#")]),this._v(" MariaDB")])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("The fastest way to set up mariadb is to use the "),e("code",[this._v("mysql_secure_installation")]),this._v(" command and follow prompts")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("mysql_secure_installation\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Change to your own secure password"),e("br"),this._v(" "),e("code",[this._v("Set root password? [Y/n] Y")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Get rid of users that could access the db by default"),e("br"),this._v(" "),e("code",[this._v("Remove anonymous users? [Y/n] Y")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Keep root off the external interfaces"),e("br"),this._v(" "),e("code",[this._v("Disallow root login remotely? [Y/n] Y")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Extra databases that aren't needed"),e("br"),this._v(" "),e("code",[this._v("Remove test database and access to it? [Y/n] Y")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("Clears and sets all the changes made"),e("br"),this._v(" "),e("code",[this._v("Reload privilege tables now? [Y/n] Y")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("p",[this._v("All done! If you've completed all of the above steps, your MariaDB"),e("br"),this._v("\ninstallation should now be secure.")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"adding-mariadb-user"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adding-mariadb-user","aria-hidden":"true"}},[this._v("#")]),this._v(" Adding MariaDB user")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"php"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#php","aria-hidden":"true"}},[this._v("#")]),this._v(" PHP")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-bash extra-class"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[this._v("systemctl "),e("span",{attrs:{class:"token function"}},[this._v("enable")]),this._v(" php-fpm\nsystemctl start php-fpm\n")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"nginx-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#nginx-2","aria-hidden":"true"}},[this._v("#")]),this._v(" nginx")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h4",{attrs:{id:"ssl-config"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#ssl-config","aria-hidden":"true"}},[this._v("#")]),this._v(" ssl config")])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"language-conf extra-class"},[e("div",{staticClass:"highlight-lines"},[e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[this._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[this._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("div",{staticClass:"highlighted"},[this._v(" ")]),e("div",{staticClass:"highlighted"},[this._v(" ")]),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br"),e("br")]),e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[this._v('server_tokens off;\n\nserver {\n    listen 80;\n    server_name <domain>;\n    return 301 https://$server_name$request_uri;\n}\n\nserver {\n    listen 443 ssl http2;\n    server_name <domain>;\n\n    root /var/www/pterodactyl/public;\n    index index.php;\n\n    access_log /var/log/nginx/pterodactyl.app-access.log;\n    error_log  /var/log/nginx/pterodactyl.app-error.log error;\n\n    # allow larger file uploads and longer script runtimes\n    client_max_body_size 100m;\n    client_body_timeout 120s;\n\n    sendfile off;\n\n    # SSL Configuration\n    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem;\n    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem;\n    ssl_session_cache shared:SSL:10m;\n    ssl_protocols TLSv1.2;\n    ssl_ciphers \'ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA256\';\n    ssl_prefer_server_ciphers on;\n\n    # See https://hstspreload.org/ before uncommenting the line below.\n    # add_header Strict-Transport-Security "max-age=15768000; preload;";\n    add_header X-Content-Type-Options nosniff;\n    add_header X-XSS-Protection "1; mode=block";\n    add_header X-Robots-Tag none;\n    add_header Content-Security-Policy "frame-ancestors \'self\'";\n    add_header X-Frame-Options DENY;\n    add_header Referrer-Policy same-origin;\n\n    location / {\n        try_files $uri $uri/ /index.php?$query_string;\n    }\n\n    location ~ \\.php$ {\n        fastcgi_split_path_info ^(.+\\.php)(/.+)$;\n        fastcgi_pass unix:/run/php/php7.2-fpm.sock;\n        fastcgi_index index.php;\n        include fastcgi_params;\n        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \\n post_max_size=100M";\n        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;\n        fastcgi_param HTTP_PROXY "";\n        fastcgi_intercept_errors off;\n        fastcgi_buffer_size 16k;\n        fastcgi_buffers 4 16k;\n        fastcgi_connect_timeout 300;\n        fastcgi_send_timeout 300;\n        fastcgi_read_timeout 300;\n        include /etc/nginx/fastcgi_params;\n    }\n\n    location ~ /\\.ht {\n        deny all;\n    }\n}\n')])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h3",{attrs:{id:"redis-2"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#redis-2","aria-hidden":"true"}},[this._v("#")]),this._v(" Redis")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"installing-the-panel"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#installing-the-panel","aria-hidden":"true"}},[this._v("#")]),this._v(" Installing the panel")])}],!1,null,null,null);e.default=r.exports}}]);