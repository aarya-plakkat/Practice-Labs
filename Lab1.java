package com.example.lab1;



import android.os.Bundle;
import android.os.Handler;
import android.widget.Button;
import android.widget.EditText;
import android.widget.ProgressBar;
import android.widget.Toast;

import androidx.appcompat.app.AppCompatActivity;

public class MainActivity extends AppCompatActivity {

    EditText etName, etEmail, etPassword, etAddress;
    Button btnRegister;
    ProgressBar progressBar;
    int progress = 0;
    Handler handler = new Handler();

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        etName = findViewById(R.id.etName);
        etEmail = findViewById(R.id.etEmail);
        etPassword = findViewById(R.id.etPassword);
        etAddress = findViewById(R.id.etAddress);
        btnRegister = findViewById(R.id.btnRegister);
        progressBar = findViewById(R.id.progressBar);

        btnRegister.setOnClickListener(v -> {
            if (validateInputs()) {
                simulateRegistration();
            }
        });
    }

    private boolean validateInputs() {
        if (etName.getText().toString().isEmpty() ||
                etEmail.getText().toString().isEmpty() ||
                etPassword.getText().toString().isEmpty() ||
                etAddress.getText().toString().isEmpty()) {

            Toast.makeText(this, "Please fill all fields", Toast.LENGTH_SHORT).show();
            return false;
        }
        return true;
    }

    private void simulateRegistration() {
        progressBar.setVisibility(ProgressBar.VISIBLE);
        progress = 0;
        progressBar.setProgress(0);

        new Thread(() -> {
            while (progress <= 100) {
                int currentProgress = progress;
                handler.post(() -> progressBar.setProgress(currentProgress));

                try {
                    Thread.sleep(30); // Simulate delay
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
                progress++;
            }

            handler.post(() -> Toast.makeText(MainActivity.this, "Registration Complete", Toast.LENGTH_LONG).show());
        }).start();
    }
}
