import { KeycloakService } from 'keycloak-angular';
import { environment } from '../../../environments/environment';

export function initializeKeycloak(keycloak: KeycloakService): () => Promise<boolean> {
	return () =>
		keycloak.init({
			config: environment.keycloakConfig,
			initOptions: {
				onLoad: 'login-required',
				checkLoginIframe: false,
				silentCheckSsoRedirectUri: window.location.origin + '/assets/silent-check-sso.html'
			},
			loadUserProfileAtStartUp: true,
			bearerExcludedUrls: ['/assets', '/public']
		});
}
