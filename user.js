// À propos

/*

Un fichier de configuration pour Mozilla Firefox créé par Yann Jaulin pour PMSInternet.

Ce fichier est basé sur les paramètres de PrivacyTools qui vise à améliorer la vie privée et la confidentialité sur Internet.

https://yannjaulin.fr/
https://protege-moi-sur-internet.com/

https://privacytools.io/
https://www.mozilla.org/fr/firefox/

*/

// Préchargement

/*

Le préchargement envoie des informations avant même que vous ayez visité un site web.

*/

user_pref("network.dns.disablePrefetch", true);

user_pref("network.dns.disablePrefetchFromHTTPS", true);

user_pref("network.predictor.enabled", false);

user_pref("network.predictor.enable-prefetch", false);

user_pref("network.prefetch-next", false);

// Protection de la vie privée

/*

Il s'agit d'un ensemble de paramètres qui permettent d'améliorer la vie privée et la confidentialité sur Internet.

*/

// Isole toutes les sources d'identifiants de navigateur vers le domaine propriétaire.
user_pref("privacy.firstparty.isolate", true);

// Rends Firefox plus résistant à la prise d'empreintes digitales des navigateurs.
user_pref("privacy.resistFingerprinting", true);

// Bloque la prise d'empreintes digitales.
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);

// Bloque le minage de cryptomonnaies.
user_pref("privacy.trackingprotection.cryptomining.enabled", true);

// Active la protection contre le pistage.
user_pref("privacy.trackingprotection.enabled", true);

// Désactive le pistage des cliques du visiteur.
user_pref("browser.send_pings", false);

// Désactive le préchargement des adresses web dans la barre d'adresse.
user_pref("browser.urlbar.speculativeConnect.enabled", false);

// Empêche les sites web de savoir lorsque vous copiez, collez ou coupez quelque chose d'une page Web.
user_pref("dom.event.clipboardevents.enabled", false);

// Désactive la lecture des contenus HTML5 protégés par DRM.
user_pref("media.eme.enabled", false);

// Désactive le module de décryptage de contenu Widevine fourni par Google.
user_pref("media.gmp-widevinecdm.enabled", false);

// Empêche les sites Web de suivre l'état du microphone et de la caméra de votre appareil.
user_pref("media.navigator.enabled", false);

// N'accepte seulement que les cookies provenant du site.
user_pref("network.cookie.cookieBehavior", 1);

// N'envoie des informations au site web que si l'hôte complète est identique.
user_pref("network.http.referer.XOriginPolicy", 2);

// N'envoie que le schéma, l'hôte et le port dans les informations.
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

// Désactive WebGL qui constitue un risque pour la sécurité.
user_pref("webgl.disabled", true);

// Désactive l'enregistrement des données de session supplémentaires.
user_pref("browser.sessionstore.privacy_level", 2);

// Désactive l'envoi de données analytiques supplémentaires aux serveurs web.
user_pref("beacon.enabled", false);

// Empêche Firefox d'envoyer des informations sur les fichiers d'applications téléchargés à Google.
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

// Force Firefox à afficher les adresses web au format Punycode afin de remarquer les sites frauduleux.
user_pref("network.IDN_show_punycode", true);

// WebRTC

/*

WebRTC est une interface de programmation JavaScript qui peut divulguer votre adresse IP.

*/

user_pref("media.peerconnection.enabled", false);

user_pref("media.peerconnection.turn.disable", true);

user_pref("media.peerconnection.use_document_iceservers", false);

user_pref("media.peerconnection.video.enabled", false);

user_pref("media.peerconnection.identity.timeout", 1);

/*

Merci à PrivacyTools pour ces paramètres et n'hésitez pas à contribuer !

https://github.com/YannJaulin/user.js

*/