<div align="center">
<a href="https://protege-moi-sur-internet.com/">
    <img src="logo.png" alt="PMSInternet">
</a>
<p>
    <em>L'annuaire des logiciels et des services qui respectent votre vie privée sur internet !</em>
</p>
</div>

Ce user.js est un fichier de configuration pour **[Mozilla Firefox](https://www.mozilla.org/fr/firefox/)** qui réside dans le répertoire racine d'un profil. Il est utilisé pour définir les paramètres de ce dernier au démarrage.

Je l'ai créé afin de rendre plus accessible la configuration de Firefox et d'appliquer des paramètres de manière automatique.

Ce fichier est basé sur les paramètres de **[PrivacyTools](https://privacytools.io/)** qui vise à améliorer la vie privée et la confidentialité sur Internet.

# Comment l'utiliser

**/!\ Le profil actuel va être supprimé, n'oubliez pas de sauvegarder vos données importantes, telles que les marque-pages, mots de passe, etc. /!\**

1. Ouvrez Firefox et tapez **about:profiles** dans la barre d'adresse.
2. Une fois sur la page, cliquez sur **Créer un nouveau profil**.
3. Dès que le nouveau profil est créé, cliquez sur **Ouvrir le répertoire** dans **Répertoire racine** dans le nouveau profil.
4. Déplacez le fichier **user.js** dans ce répertoire et cliquez sur **Lancer le profil dans un nouveau navigateur**.
5. Fermez l'ancien navigateur et le répertoire, tapez **about:profiles** dans le nouveau navigateur et une fois sur la page, cliquez sur **Supprimer** dans l'ancien profil.

**Ça y est, votre profil est configuré et vous êtes mieux protégé sur Internet !**

# Paramètres

Afin de rendre le fichier plus transparent, tous les paramètres appliqués sont expliqués.

## Préchargement

Le préchargement envoie des informations avant même que vous ayez visité un site web.

| Paramètre | Valeur |
| :-: | :-: |
| `network.dns.disablePrefetch` | **true** |
| `network.dns.disablePrefetchFromHTTPS` | **true** |
| `network.predictor.enabled` | **false** |
| `network.predictor.enable-prefetch` | **false** |
| `network.prefetch-next` | **false** |

## Protection de la vie privée

Il s'agit d'un ensemble de paramètres qui permettent d'améliorer la vie privée et la confidentialité sur Internet.

| Paramètre | Valeur | Description |
| :-: | :-: | :-: |
| `privacy.firstparty.isolate` | **true** | Isole toutes les sources d'identifiants de navigateur vers le domaine propriétaire. |
| `privacy.resistFingerprinting` | **true** | Rends Firefox plus résistant à la prise d'empreintes digitales des navigateurs. |
| `privacy.trackingprotection.fingerprinting.enabled` | **true** | Bloque la prise d'empreintes digitales. |
| `privacy.trackingprotection.cryptomining.enabled` | **true** | Bloque le minage de cryptomonnaies. |
| `privacy.trackingprotection.enabled` | **true** | Active la protection contre le pistage. |
| `browser.send_pings` | **false** | Désactive le pistage des cliques du visiteur. |
| `browser.urlbar.speculativeConnect.enabled` | **false** | Désactive le préchargement des adresses web dans la barre d'adresse. |
| `dom.event.clipboardevents.enabled` | **false** | Empêche les sites web de savoir lorsque vous copiez, collez ou coupez quelque chose d'une page Web. |
| `media.eme.enabled` | **false** | Désactive la lecture des contenus HTML5 protégés par DRM. |
| `media.gmp-widevinecdm.enabled` | **false** | Désactive le module de décryptage de contenu Widevine fourni par Google. |
| `media.navigator.enabled` | **false** | Empêche les sites Web de suivre l'état du microphone et de la caméra de votre appareil. |
| `network.cookie.cookieBehavior` | **1** | N'accepte seulement que les cookies provenant du site. |
| `network.http.referer.XOriginPolicy` | **2** | N'envoie des informations au site web que si l'hôte complète est identique. |
| `network.http.referer.XOriginTrimmingPolicy` | **2** | N'envoie que le schéma, l'hôte et le port dans les informations. |
| `webgl.disabled` | **true** | Désactive WebGL qui constitue un risque pour la sécurité. |
| `browser.sessionstore.privacy_level` | **2** | Désactive l'enregistrement des données de session supplémentaires. |
| `beacon.enabled` | **false** | Désactive l'envoi de données analytiques supplémentaires aux serveurs web. |
| `browser.safebrowsing.downloads.remote.enabled` | **false** | Empêche Firefox d'envoyer des informations sur les fichiers d'applications téléchargés à Google. |
| `network.IDN_show_punycode` | **true** | Force Firefox à afficher les adresses web au format Punycode afin de remarquer les sites frauduleux. |

## WebRTC

WebRTC est une interface de programmation JavaScript qui peut divulguer votre adresse IP.

| Paramètre | Valeur |
| :-: | :-: |
| `media.peerconnection.enabled` | **false** |
| `media.peerconnection.turn.disable` | **true** |
| `media.peerconnection.use_document_iceservers` | **false** |
| `media.peerconnection.video.enabled` | **false** |
| `media.peerconnection.identity.timeout` | **1** |

- - -

**Merci à PrivacyTools pour ces paramètres et n'hésitez pas à contribuer !**
