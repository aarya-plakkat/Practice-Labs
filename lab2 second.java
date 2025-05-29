package com.example.lab2;

import android.os.Bundle;
import android.widget.TextView;

import androidx.appcompat.app.AppCompatActivity;

public class SecondActivity extends AppCompatActivity {

    TextView tvWelcome;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_second);

        tvWelcome = findViewById(R.id.tvWelcome);

        // Get the data from intent
        String name = getIntent().getStringExtra("userName");
        tvWelcome.setText("Welcome, " + name + "!");
    }
}
