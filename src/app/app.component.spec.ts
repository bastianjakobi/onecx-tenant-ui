import { HttpClientTestingModule } from '@angular/common/http/testing'
import { TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'
import { AUTH_SERVICE, MockAuthModule, PortalCoreModule } from '@onecx/portal-integration-angular'
import { AppComponent } from './app.component'
import { TranslateTestingModule } from 'ngx-translate-testing'
import { StandaloneShellModule } from '@onecx/standalone-shell'

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [
        RouterTestingModule,
        PortalCoreModule.forRoot('test'),
        HttpClientTestingModule,
        TranslateTestingModule.withTranslations('en', {}),
        StandaloneShellModule
      ],
      providers: [{ provide: AUTH_SERVICE, useClass: MockAuthModule }]
    }).compileComponents()
  })

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent)
    const app = fixture.componentInstance
    expect(app).toBeTruthy()
  })
})
